// ignore_for_file: deprecated_member_use

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:frontend/api%20calls/payment_gateway.dart';
import 'package:frontend/api%20calls/wallet.dart';
import 'package:frontend/models/user.dart';
import 'package:frontend/providers/user.dart';
import 'package:frontend/services/user_alert.dart';
import 'package:frontend/widgets/ui/dark_text_field.dart';
import 'package:frontend/widgets/ui/long_button.dart';
import 'package:frontend/widgets/ui/spinner.dart';
import 'package:http/http.dart';
import 'package:provider/provider.dart';

class Wallet extends StatefulWidget {
  static const routeName = '/wallet';
  const Wallet({Key? key}) : super(key: key);

  @override
  State<Wallet> createState() => _WalletState();
}

class _WalletState extends State<Wallet> {
  int amount = 0;
  String? paymentIntent;
  var balance = 0.0;
  bool isLoading = true;
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey();

  void setAmount(String value) {
    if (mounted) {
      if (value != '') {
        double doubleVal = double.parse(value.toString());
        int flooredVal = doubleVal.floor();

        setState(() {
          amount = flooredVal;
        });
      } else {
        setState(() {
          amount = 0;
        });
      }
    }
  }

  Future<String> getCurrentBalance() async {
    User user = Provider.of<UserProvider>(context, listen: false).user;
    Response response =
        await getBalance(user.phoneNumber, user.walletAddress, user.token);
    if (mounted) {
      setState(() {
        isLoading = false;
      });
    }
    if (response.statusCode == 200) {
      var balance = json.decode(response.body)['data']['balance'];
      return balance.toString();
    } else if (response.statusCode == 401) {
      snackBar(scaffoldKey, 'Unauthorized.');
      return '';
    } else {
      return '';
    }
  }

  int calculateInRupees() {
    return amount * 2;
  }

  Future<void> makePaymentNow(context) async {
    User user = Provider.of<UserProvider>(context, listen: false).user;
    Response response =
        await makePayment(calculateInRupees(), user.phoneNumber, user.token);
    paymentIntent = json.decode(response.body)['data']['paymentIntent'];
    await Stripe.instance.initPaymentSheet(
        paymentSheetParameters: SetupPaymentSheetParameters(
            paymentIntentClientSecret: paymentIntent!,
            applePay: true,
            googlePay: true,
            style: ThemeMode.dark,
            merchantCountryCode: 'US',
            merchantDisplayName: 'Ride'));

    displayPaymentSheet(context, user);
  }

  Future<void> displayPaymentSheet(context, User user) async {
    try {
      await Stripe.instance.presentPaymentSheet(
          parameters: PresentPaymentSheetParameters(
        clientSecret: paymentIntent!,
        confirmPayment: true,
      ));

      setState(() {
        paymentIntent = null;
        isLoading = true;
      });
      Response response = await mintRideCoins(
          user.phoneNumber, user.walletAddress, amount, user.token);
      if (response.statusCode == 201) {
        Fluttertoast.showToast(
            msg: 'Purchase successful',
            backgroundColor: Colors.green,
            gravity: ToastGravity.BOTTOM,
            timeInSecForIosWeb: 3);

        var tempBalance = double.parse(await getCurrentBalance());
        setState(() {
          balance = tempBalance;
        });
        Navigator.of(context).pushReplacementNamed(Wallet.routeName);
      } else {
        Fluttertoast.showToast(
            msg: 'Unsuccessful',
            backgroundColor: Colors.red,
            gravity: ToastGravity.BOTTOM,
            timeInSecForIosWeb: 3);
      }
    } catch (error) {
      print(error);
    }
  }

  @override
  void initState() {
    Future.delayed(
      Duration.zero,
      () async {
        var tempBalance = double.parse(await getCurrentBalance());
        setState(() {
          balance = tempBalance;
        });
      },
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: () => FocusManager.instance.primaryFocus?.unfocus(),
        child: Scaffold(
            key: scaffoldKey,
            resizeToAvoidBottomInset: false,
            appBar: AppBar(
              title: const Text('Wallet'),
            ),
            backgroundColor: Theme.of(context).backgroundColor,
            body: !isLoading
                ? Column(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Container(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'YOUR WALLET BALANCE',
                              style: Theme.of(context).textTheme.titleSmall,
                            ),
                            Text(
                              balance.toString(),
                              style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 38,
                                  fontFamily: 'SF-Pro-Rounded',
                                  fontWeight: FontWeight.normal),
                            ),
                          ],
                        ),
                        margin:
                            EdgeInsets.symmetric(horizontal: 10, vertical: 20),
                        padding: const EdgeInsets.only(
                            top: 10, bottom: 12, left: 10, right: 10),
                        width: double.infinity,
                        decoration: ShapeDecoration(
                          color: Color.fromARGB(255, 55, 55, 59),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)),
                        ),
                      ),
                      Container(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'BUY RIDECOINS',
                              style: Theme.of(context).textTheme.titleSmall,
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            DarkTextField(
                                label: 'Amount',
                                placeholder: 'Minimum should be 75',
                                color: Colors.transparent,
                                onChangeHandler: setAmount,
                                keyboardType: TextInputType.number),
                            const SizedBox(
                              height: 30,
                            ),
                            Container(
                              alignment: Alignment.center,
                              child: Text(
                                'You will pay',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 30,
                                    fontFamily: 'SF-Pro-Rounded',
                                    fontWeight: FontWeight.normal),
                              ),
                            ),
                            const SizedBox(
                              height: 5,
                            ),
                            Container(
                              alignment: Alignment.center,
                              child: Text(
                                'PKR ${calculateInRupees()}',
                                style: TextStyle(
                                    color: Colors.white,
                                    fontSize: 60,
                                    fontFamily: 'SF-Pro-Rounded',
                                    fontWeight: FontWeight.normal),
                              ),
                            ),
                            Container(
                              alignment: Alignment.center,
                              child: Text(
                                '1 RIDECOIN = 2PKR ',
                                style: Theme.of(context).textTheme.bodyMedium,
                              ),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            amount * 2 < 150
                                ? LongButton(
                                    handler: () {},
                                    buttonText: 'Pay',
                                    isActive: false)
                                : LongButton(
                                    handler: () => makePaymentNow(context),
                                    buttonText: 'Pay',
                                    isActive: true)
                          ],
                        ),
                        margin: EdgeInsets.symmetric(
                          horizontal: 10,
                        ),
                        padding: const EdgeInsets.only(
                            top: 10, bottom: 20, left: 10, right: 10),
                        width: double.infinity,
                        decoration: ShapeDecoration(
                          color: const Color.fromARGB(255, 55, 55, 59),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8)),
                        ),
                      ),
                    ],
                  )
                : Spinner(text: 'Loading', height: 0)));
  }
}
