class PolyTreeNode

    attr_accessor :value
    attr_reader :parent

    def initialize(value = nil)       
        @value = value 
        @parent = nil
        @children = []
    end    

    def children
        @children.dup
    end

    def parent=(parent) 
        #@parent = @children
        #@children[1] = 
        return if self.parent == parent # not running script if new parent is old parent


        #self is the PolytreeNode instance

        # self = #<PolyTreeNode:0x00007fdf3a026478 
        # @value="a", @children=["b", "c"], @parent=nil>

        #           "a"
        #        "b"   "c"

        # node.parent = "new parent"

        # 1. if node has parent, remove previous 
        #     parent

        if self.parent # continues if node has a parent
            self.parent._children.delete(self)
        end

         @parent = parent
        self.parent._children << self unless self.parent.nil?

         self #modified self with new parent
    end


    # b = #<PolyTreeNode:0x00007fdf3a026478 
    # @value="b", @children=["d", "e"], @parent="a">


    # w = #<PolyTreeNode:0x00007fdf3a026478 
    # @value="w", @children=["x", "y"], @parent="b">



    # b.add_child(w)

    # my_node.add_child("d")  <---- new child

    def add_child(child)
        #return if child.parent == self
        child.parent = self
    end

    def _children
       @children
    end

end
