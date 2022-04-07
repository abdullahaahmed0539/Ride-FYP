// ignore_for_file: file_names
import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:intl_phone_field/phone_number.dart';
import 'package:provider/provider.dart';
import '../services/string_extension.dart';
import '../services/utilities.dart';
import '../providers/App.dart';

class User {
  String _id;
  String _firstName;
  String _lastName;
  String _email;
  PhoneNumber _phoneNumber;
  String _country;
  String _walletAddress;
  bool _isDriver = false;
  String _token;
  String _expiresIn;

  User(
      this._id,
      this._firstName,
      this._lastName,
      this._country,
      this._email,
      this._phoneNumber,
      this._token,
      this._walletAddress,
      this._isDriver,
      this._expiresIn);

  String get id => _id;
  PhoneNumber get phoneNumber => _phoneNumber;
  String get token => _token;
  String get email => _email;
  bool get isDriver => _isDriver;

  String getFullName() {
    return '${_firstName.capitalize()} ${_lastName.capitalize()}';
    
  }

  void onLogin(var response, BuildContext ctx) {
    var responseData = json.decode(response.body)['data'];
    PhoneNumber extractedPhoneNumber = convertToPhoneNumber(
        responseData['phoneNumber'], responseData['country']);
    _id = responseData['_id'];
    _firstName = responseData['firstName'];
    _lastName = responseData['lastName'];
    _country = responseData['country'];
    _email = responseData['email'];
    _phoneNumber = extractedPhoneNumber;
    _token = responseData['token'];
    _walletAddress = responseData['walletAddress'];
    _isDriver = responseData['isDriver'];
    _expiresIn = responseData['expiresIn'];
    Provider.of<AppProvider>(ctx, listen: false).app.setAppMode('rider');
  }

  void onLogout(BuildContext ctx) {
    _id = '';
    _firstName = '';
    _lastName = '';
    _email = '';
    _phoneNumber = PhoneNumber(countryISOCode: '', countryCode: '', number: '');
    _country = '';
    _walletAddress = '';
    _token = '';
    _expiresIn = '';
    _isDriver = false;
    Provider.of<AppProvider>(ctx, listen: false).app.setAppMode('');
  }

  void updateUserName(
    String firstName,
    String lastName,
  ) {
    _firstName = firstName;
    _lastName = lastName;
  }

  void updateUserEmail(String email) {
    _email = email;
  }

  void updateUserPhoneNumberAndCountry(
      PhoneNumber phoneNumber, String country, String token) {
    _phoneNumber = phoneNumber;
    _country = country;
    _token = token;
  }
}
