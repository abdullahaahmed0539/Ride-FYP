import 'package:flutter/material.dart';

class TextualButton extends StatelessWidget {
  final VoidCallback handler;
  final String buttonText;

  const TextualButton({Key? key, 
    required this.handler,
    required this.buttonText,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
        style:  TextButton.styleFrom(
          primary: const Color(0xff9F61F0),
        ),
        child: Text(
          buttonText,
          style: const TextStyle(
            fontFamily: "SF-Pro-Display",
            fontSize: 16,
            fontWeight: FontWeight.w600,
          ),
        ),
        onPressed: handler);
  }
}
