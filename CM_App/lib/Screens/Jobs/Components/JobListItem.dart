import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class JobListItem extends StatelessWidget {
  const JobListItem({super.key, required this.job, required this.onSelect});

  final JobDto job;
  final void Function(JobDto) onSelect;

  @override
  Widget build(BuildContext context) {
    return ListTile(
        leading: Icon(Icons.work),
        title: Text(job.title!),
        subtitle: Text(job.description!),
        onTap:() => {onSelect(job)}
    );
  }
}
