class PolyTreeNode
    attr_reader :value, :children, :parent
    def initialize(value,children=[])       
        @value = value 
        @children = children
        @parent = nil
    end    

    def parent= 
        
    end

end