require 'byebug'
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

# arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false


# Sorting
# As a person of elevated algorithmic sensibilities, the brute-force approach is beneath you.
#  Leave that nonsense to the riffraff. 
# Instead, you'll apply a refined and time-honored technique: sorting.

# Sort your data, then try to solve the problem.

# What does sorting do to the lower bound of your time complexity?
# How might sorting that make the problem easier?
# Write a second solution, called okay_two_sum?, which uses sorting. Make sure it works correctly.

# Hint: (There are a couple ways to solve this problem once it's sorted. 
# One way involves using a very cheap algorithm that can only be used on sorted data sets. 
# What are some such algorithms you know?)

def okay_two_sum?(arr, target_sum)
    sorted = arr.sort # [2,3,4,5,6,7,8] 
    
    i = 0   #0, 0

    j = sorted.length - 1 # [1,2,3,4 target = 5 ... 1,000,000] =>O(n)
    # debugger
    while i < j
        case (sorted[i] + sorted[j]) <=> target_sum
        when 0  
            return true 
        when -1
            i += 1
        when 1 
            j -= 1
        end
    end
    false 
end

arr = [2, 5, 3, 6, 4, 7, 8] #  => [2,3,4,5,6,7,8]
p okay_two_sum?(arr, 6) # => should be true
p okay_two_sum?(arr, 27) # => should be false