import 'dart:async';

import 'package:flutter/material.dart';

class CustomSearchBar extends StatelessWidget {
  CustomSearchBar({super.key, required this.onSearch});

  final void Function(String) onSearch;
  final TextEditingController _searchController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    Timer timer = Timer(const Duration(milliseconds: 25), () => '');

    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 8.0),
        child: TextField(
          controller: _searchController,
          onChanged: (value){
            timer.cancel();
            timer = Timer(const Duration(milliseconds: 250), () => onSearch(value));
          },
          decoration: InputDecoration(
            hintText: 'Rechercher ...',
            suffixIcon: IconButton(
              icon: const Icon(Icons.clear),
              onPressed: (){
                _searchController.clear();
                onSearch('');
              }
            ),
            prefixIcon: IconButton(
              icon : const Icon(Icons.search),
              onPressed:() {
                onSearch(_searchController.text);
              }
          ),
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(20.0),
            )
          ),
        )
      )

    );
  }
}
