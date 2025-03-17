// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_input.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$UserInput extends UserInput {
  @override
  final String? username;
  @override
  final String? lastname;
  @override
  final String? firstname;
  @override
  final String? email;
  @override
  final String? password;
  @override
  final String? roleName;

  factory _$UserInput([void Function(UserInputBuilder)? updates]) =>
      (new UserInputBuilder()..update(updates))._build();

  _$UserInput._(
      {this.username,
      this.lastname,
      this.firstname,
      this.email,
      this.password,
      this.roleName})
      : super._();

  @override
  UserInput rebuild(void Function(UserInputBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  UserInputBuilder toBuilder() => new UserInputBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is UserInput &&
        username == other.username &&
        lastname == other.lastname &&
        firstname == other.firstname &&
        email == other.email &&
        password == other.password &&
        roleName == other.roleName;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, username.hashCode);
    _$hash = $jc(_$hash, lastname.hashCode);
    _$hash = $jc(_$hash, firstname.hashCode);
    _$hash = $jc(_$hash, email.hashCode);
    _$hash = $jc(_$hash, password.hashCode);
    _$hash = $jc(_$hash, roleName.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'UserInput')
          ..add('username', username)
          ..add('lastname', lastname)
          ..add('firstname', firstname)
          ..add('email', email)
          ..add('password', password)
          ..add('roleName', roleName))
        .toString();
  }
}

class UserInputBuilder implements Builder<UserInput, UserInputBuilder> {
  _$UserInput? _$v;

  String? _username;
  String? get username => _$this._username;
  set username(String? username) => _$this._username = username;

  String? _lastname;
  String? get lastname => _$this._lastname;
  set lastname(String? lastname) => _$this._lastname = lastname;

  String? _firstname;
  String? get firstname => _$this._firstname;
  set firstname(String? firstname) => _$this._firstname = firstname;

  String? _email;
  String? get email => _$this._email;
  set email(String? email) => _$this._email = email;

  String? _password;
  String? get password => _$this._password;
  set password(String? password) => _$this._password = password;

  String? _roleName;
  String? get roleName => _$this._roleName;
  set roleName(String? roleName) => _$this._roleName = roleName;

  UserInputBuilder() {
    UserInput._defaults(this);
  }

  UserInputBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _username = $v.username;
      _lastname = $v.lastname;
      _firstname = $v.firstname;
      _email = $v.email;
      _password = $v.password;
      _roleName = $v.roleName;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(UserInput other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$UserInput;
  }

  @override
  void update(void Function(UserInputBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  UserInput build() => _build();

  _$UserInput _build() {
    final _$result = _$v ??
        new _$UserInput._(
          username: username,
          lastname: lastname,
          firstname: firstname,
          email: email,
          password: password,
          roleName: roleName,
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
