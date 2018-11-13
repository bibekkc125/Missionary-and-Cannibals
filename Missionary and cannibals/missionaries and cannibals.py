from anytree import Node, RenderTree
#______________________________________________________________________________
# Missionaries and Cannibals Problem

class State():
	def __init__(self, cl, ml, b, cr, mr):
		self.cl = cl
		self.ml = ml
		self.b = b
		self.cr = cr
		self.mr = mr
		self.parent = None

	def goal_state(self):
		if self.cl == 0 and self.ml == 0:
			return True
		else:
			return False

	def valid(self):
		if self.ml >= 0 and self.mr >= 0 \
                   and self.cl >= 0 and self.cr >= 0 \
				and (self.ml == 0 or self.ml >= self.cl) \
				and (self.mr == 0 or self.mr >= self.cr):

			return True
		else:
			return False

	def __eq__(self, other):
		return self.cl == other.cl and self.ml == other.ml \
                   and self.b == other.b and self.cr == other.cr \
                   and self.mr == other.mr

	def __hash__(self):
		return hash((self.cl, self.ml, self.b, self.cr, self.mr))

def successors(current_state):
	children = [];
	if current_state.b == 'left':
		new_state = State(current_state.cl, current_state.ml - 2, 'right',
                                  current_state.cr, current_state.mr + 2)
		## Two missionaries cross left to right.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl - 2, current_state.ml, 'right',
                                  current_state.cr + 2, current_state.mr)
		## Two cannibals cross left to right.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl - 1, current_state.ml - 1, 'right',
                                  current_state.cr + 1, current_state.mr + 1)
		## One missionary and one cannibal cross left to right.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl, current_state.ml - 1, 'right',
                                  current_state.cr, current_state.mr + 1)
		## One missionary crosses left to right.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl - 1, current_state.ml, 'right',
                                  current_state.cr + 1, current_state.mr)
		## One cannibal crosses left to right.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
	else:
		new_state = State(current_state.cl, current_state.ml + 2, 'left',
                                  current_state.cr, current_state.mr - 2)
		## Two missionaries cross right to left.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl + 2, current_state.ml, 'left',
                                  current_state.cr - 2, current_state.mr)
		## Two cannibals cross right to left.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl + 1, current_state.ml + 1, 'left',
                                  current_state.cr - 1, current_state.mr - 1)
		## One missionary and one cannibal cross right to left.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl, current_state.ml + 1, 'left',
                                  current_state.cr, current_state.mr - 1)
		## One missionary crosses right to left.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
		new_state = State(current_state.cl + 1, current_state.ml, 'left',
                                  current_state.cr - 1, current_state.mr)
		## One cannibal crosses right to left.
		if new_state.valid():
			new_state.parent = current_state
			children.append(new_state)
	return children

def breadth_first_search():
	initial_state = State(3,3,'left',0,0)
	if initial_state.goal_state():
		return initial_state
	frontier = []
	explored = []
	frontier.append(initial_state)
	while frontier:
		state = frontier.pop(0)
		if state.goal_state():
			return state
		explored.append(state)
		children = successors(state)
		for child in children:
			if (child not in explored) or (child not in frontier):
				frontier.append(child)


def print_solution(solution):
		path = []
		final = []
		path.append(solution)
		parent = solution.parent
		while parent:
			path.append(parent)
			parent = parent.parent

		for t in range(len(path)):
			state = path[len(path) - t - 1]
			final.append("(" + str(state.cl) + "," + str(state.ml) \
                              + "," + state.b + "," + str(state.cr) + "," + \
                              str(state.mr) + ")")
		'''for i in range(len(final)):
			print(final[i])'''
		return final

returned_final = print_solution(breadth_first_search())
def draw_tree(returned_final):

	a = Node(returned_final[0])
	m = Node("(2,3,right,1,0)",parent = a)
	b = Node(returned_final[1],parent = a)
	c = Node(returned_final[2], parent=b)
	d = Node(returned_final[3], parent=c)
	e = Node(returned_final[4], parent=d)
	f = Node(returned_final[5], parent=e)
	g = Node(returned_final[6], parent=f)
	h = Node(returned_final[7], parent=g)
	i = Node(returned_final[8], parent=h)
	j = Node(returned_final[9], parent=i)
	k = Node(returned_final[10], parent=j)
	l = Node(returned_final[11], parent=k)
	n = Node("(2,2,right,1,1)",parent = a)
	c = Node(returned_final[2],parent = n)
	d = Node(returned_final[3],parent = c)
	e = Node(returned_final[4],parent = d)
	f = Node(returned_final[5],parent = e)
	g = Node(returned_final[6],parent = f)
	h = Node(returned_final[7],parent = g)
	i = Node(returned_final[8],parent = h)
	j = Node(returned_final[9],parent = i)
	k = Node(returned_final[10],parent = j)
	l = Node(returned_final[11],parent = k)

	for pre, fill, node in RenderTree(a):
		print("%s%s" % (pre, node.name))


def main():
	#print(breadth_first_search().cr)
	print(" ")
	print ("State-space Tree")
	print (" ")
	print ("(cannibalLeft,missionaryLeft,boat,cannibalRight,missionaryRight)")
	print(" ")
	breadth_first_search()
	draw_tree(returned_final)

# if called from the command line, call main()
if __name__ == "__main__":
    main()
