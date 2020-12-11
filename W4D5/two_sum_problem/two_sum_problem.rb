#Given an array of unique integers and a target sum, determine whether any two integers in the array sum to that amount.

#Be able to reason about a difficult problem and think of ways to solve it.
#Be able to determine and explain the time and space complexity of a method
#Be able to recognize when time or space complexity can be improved
#Know some common tricks to improve time or space complexity

def bad_two_sum?(arr, target_sum)

    arr.each_with_index do |el1, i1|
        arr.each_with_index do |el2, i2|
            return true if ((i2 > i1) && (el1 + el2 == target_sum))      #time complexity = n^2
        end
    end
    false
end

arr = [0, 1, 5, 7]
p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false


