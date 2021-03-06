import 'package:flutter/material.dart';
import 'package:frontend/services/user_alert.dart';
import 'package:frontend/widgets/components/disputes_on_you_shortcut.dart';
import 'package:frontend/widgets/components/my_disputes_shortcut.dart';
import '../widgets/components/navigation_menu.dart';
import '../widgets/components/voting_shortcut.dart';
import 'package:http/http.dart';
import 'package:provider/provider.dart';
import 'dart:convert';
import '../api calls/disputes.dart';
import '../models/user.dart';
import '../providers/user.dart';

class Home extends StatefulWidget {
  static const routeName = '/home';
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey();
  List<dynamic> disputesOnMe = [];
  List<dynamic> disputesByMe = [];
  List<dynamic> otherDisputes = [];

  @override
  void initState() {
    Future.delayed(
      Duration.zero,
      onStart,
    );
    super.initState();
  }

  void onStart() {
    fetchDisputeOnYouFromServer();
    fetchDisputeByYouFromServer();
    fetchOtherDisputesFromServer();
  }

  Future fetchDisputeOnYouFromServer() async {
    User user = Provider.of<UserProvider>(context, listen: false).user;

    final response =
        await fetchActiveDisputesOnMe(user.id, user.phoneNumber, user.token);
    fetchDisputesResponseHandler(response, 1);
  }

  Future fetchDisputeByYouFromServer() async {
    User user = Provider.of<UserProvider>(context, listen: false).user;

    final response =
        await fetchMyCompletedDisputes(user.id, user.phoneNumber, user.token);
    fetchDisputesResponseHandler(response, 2);
  }

  Future fetchOtherDisputesFromServer() async {
    User user = Provider.of<UserProvider>(context, listen: false).user;
    final response = await fetchDisputesForVotingBrief(
        user.id, user.phoneNumber, user.token);
    fetchDisputesResponseHandler(response, 3);
  }

  void fetchDisputesResponseHandler(Response response, int whichFunction) {
    //incase of internal server error
    if (response.statusCode != 404 && response.statusCode != 200) {
      snackBar(scaffoldKey,
          'Internal Server Error. Problem which fetching disputes.');
    }

    //incase of successful fetch
    if (response.statusCode == 200) {
      if (whichFunction == 1) {
        setState(() {
          disputesOnMe = json.decode(response.body)['data']['disputes'];
        });
      } else if (whichFunction == 2) {
        setState(() {
          disputesByMe = json.decode(response.body)['data']['disputes'];
        });
      } else if (whichFunction == 3) {
        setState(() {
          otherDisputes = json.decode(response.body)['data']['disputes'];
        });
      }
    }
    //incase of no fetch
    if (response.statusCode == 404) {
      if (whichFunction == 1) {
        setState(() {
          disputesOnMe = [];
        });
      } else if (whichFunction == 2) {
        setState(() {
          disputesByMe = [];
        });
      } else if (whichFunction == 3) {
        setState(() {
          otherDisputes = [];
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        key: scaffoldKey,
        backgroundColor: Theme.of(context).backgroundColor,
        appBar: AppBar(
          title: const Text(
            'Ride',
          ),
        ),
        body: RefreshIndicator(
          onRefresh: () async {
            fetchDisputeByYouFromServer();
            fetchDisputeOnYouFromServer();
            fetchOtherDisputesFromServer();
          },
          child: SingleChildScrollView(
            physics: const AlwaysScrollableScrollPhysics(),
            child: Column(children: [
              NavigationMenu(scaffoldKey: scaffoldKey),
              DisputesOnYouShortCut(
                disputesOnMe: disputesOnMe,
              ),
              VotingShortcut(
                disputes: otherDisputes,
              ),
              MyDisputesShortcut(
                myDisputes: disputesByMe,
              ),
            ]),
          ),
        ));
  }
}
