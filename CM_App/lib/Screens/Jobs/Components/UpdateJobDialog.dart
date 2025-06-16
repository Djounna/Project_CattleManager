import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class UpdateJobDialog extends StatefulWidget {
  const UpdateJobDialog({super.key, required this.job});

  final JobDto job;

  @override
  State<UpdateJobDialog> createState() => _UpdateJobDialogState();
}

class _UpdateJobDialogState extends State<UpdateJobDialog> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }
}
