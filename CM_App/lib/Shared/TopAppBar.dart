import 'package:cm_app/app_context.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class TopAppBar extends StatelessWidget implements PreferredSizeWidget {
  const TopAppBar({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(50);

  @override
  Widget build(BuildContext context) {
    AppContext appContext = Provider.of<AppContext>(context);

    return AppBar(
      title: const Text("Cattle Manager"),
      actions: []
    );
  }
}
