
import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class CowDetailsDialog extends StatelessWidget {
  const CowDetailsDialog({super.key, required this.cowDetails});

  final CowDetailsDto cowDetails;

  @override
  Widget build(BuildContext context) {
    return Dialog(
      backgroundColor: Colors.white,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 20)
      )
    )
  }
}
