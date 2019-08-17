function showScope() {
  scope = "local";
  return scope;
}

scope = "global";

console.log(scope); // global
console.log(showScope()); // local
console.log(scope); // local
