//import 'package:cloud_firestore/cloud_firestore.dart';
//import 'package:firebase_core/firebase_core.dart';
// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'auntification1.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Init City', theme: ThemeData(), home: auntification1(key: key));
  }
}
