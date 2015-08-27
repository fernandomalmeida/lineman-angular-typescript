describe("service: AuthenticationService", function(){
  beforeEach(function(){
    module("app");
  });

  beforeEach(inject(function($http, AuthenticationService){
    this.AuthenticationService = AuthenticationService;
    this.$http = $http;
    this.$httpPost = spyOn($http, 'post');
    this.$httpGet = spyOn($http, 'get');
  }));

  describe("#login", function(){
    beforeEach(function(){
      this.credentials = {name: 'Dave'};
    });
    it("verify if login is working", function(){
      this.AuthenticationService.login(this.credentials);
      expect(this.$httpPost).toHaveBeenCalledWith('/login', this.credentials);
    });
  });

  describe("#logout", function(){
    it("verify is logout redirect to /logout", function(){
      this.AuthenticationService.logout();
      expect(this.$httpPost).toHaveBeenCalledWith('/logout', {});
    });
  });
});

/*
describe "service: AuthenticationService", ->

  Given -> module("app")

  Given -> inject ($http, @AuthenticationService) =>
    @$httpPost = spyOn($http, 'post')
    @$httpGet  = spyOn($http, 'get')

  describe "#login", ->
    Given  -> @credentials = {name: 'Dave'}
    When   -> @AuthenticationService.login(@credentials)
    Then   -> expect(@$httpPost).toHaveBeenCalledWith('/login', @credentials)

  describe "#logout", ->
    When -> @AuthenticationService.logout()
    Then -> expect(@$httpPost).toHaveBeenCalledWith('/logout')
*/