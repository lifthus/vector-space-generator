# e.g.
# returns [[0,0],[0,1],[1,0],[1,1]] for length 2 and base [0,1]
def space_generator_2d(length = 1, base=[0,1]):
  space = []
  for i in base:
    space.append([i])
  new_space = []
  for i in range(length) :
    for j in space:
      for k in base:
        new_space.append(j+[k])
    if i!= length-1:
      space = new_space[:]
      new_space = []
  return new_space
