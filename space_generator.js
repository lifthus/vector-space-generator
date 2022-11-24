// e.g.
// returns [[0,0],[0,1],[1,0],[1,1]] for length 2 and base [0,1]
function space_generator_2d(length = 1, base=[0,1]) {
  space = [];
  for (i of base)
    space = [...space, [i]];
  new_space = [];
  for (let i = 0; i < length -1 ; i++ ) {
    for ( j of space ) {
      for ( k of base )
        new_space = [...new_space, [...j, k]]
    }
    if ( i!== length-2) {
      space = [...new_space]
      new_space = []
    }
  }
  return new_space
}
