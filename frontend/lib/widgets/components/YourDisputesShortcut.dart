//Add http calls
// different display when no voting available

import 'package:flutter/material.dart';
import 'package:frontend/screens/disputes/DisputeTabs.dart';
import 'package:frontend/widgets/ui/LongButton.dart';

import '../../screens/disputes/DisputesByYou.dart';
import '../ui/CardItem.dart';

class YourDisputesShortcut extends StatefulWidget {
  const YourDisputesShortcut({Key? key}) : super(key: key);

  @override
  State<YourDisputesShortcut> createState() => _YourDisputesShortcut();
}

class _YourDisputesShortcut extends State<YourDisputesShortcut> {
  @override
  Widget build(BuildContext context) {
    return Card(
        margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
        color: const Color(0xff333439),
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Container(
            alignment: Alignment.topLeft,
            margin: const EdgeInsets.only(top: 12, left: 12, bottom: 15),
            child: Text(
              'WHAT DOES THE COMMUNITY THINK ABOUT YOUR DISPUTES',
              style: Theme.of(context).textTheme.titleSmall,
            ),
          ),
          CardItem(
              'Robbery',
              'I was held hostage by the driver for 4 hours. then what should i do ',
              'View results',
              10,
              3,
              () {}),
          CardItem(
              'Robbery',
              'I was held hostage by the driver for 4 hours. then what should i do ',
              'View results',
              10,
              3,
              () {}),
          
          Container(margin: const EdgeInsets.symmetric(vertical: 15, horizontal: 12), child: LongButton(handler: () =>  Navigator.of(context).pushNamed(DisputeTabs.routeName, arguments: {'initialIndex': 0}), buttonText: 'More', isActive: true))
        ]));
  }
}