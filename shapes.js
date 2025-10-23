const shapesData = {
  cube: {
    name: "Cube",
    dimension: "3D",
    formula: "TSA = 6a^2; CSA = 4a^2; V = a^3",
    params: [ "a" ]
  },
  cuboid: {
    name: "Cuboid",
    dimension: "3D",
    formula: "TSA = 2(lb + bh + hl); CSA = 2h(l + b); V = l × b × h",
    params: [ "l", "b", "h" ]
  },
  // ...add sphere, cylinder, cone
  square: {
    name: "Square",
    dimension: "2D",
    formula: "Area = a^2; Perimeter = 4a",
    params: [ "a" ]
  },
  // ...rectangle, triangle, circle
};
