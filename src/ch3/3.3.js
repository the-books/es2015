for (names.front(); names.currPos() < names.length(); names.next()) {
  console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
  console.log(names.getElement());
}
