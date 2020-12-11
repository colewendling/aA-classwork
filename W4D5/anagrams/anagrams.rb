#Write a method #first_anagram? that will generate and store all the possible anagrams of the first string. Check if the second string is one of these.

#What is the time complexity of this solution? What happens if you increase the size of the strings?

#Our goal today is to write a method that determines if two given words are anagrams. This means that the letters in one word can be rearranged to form the other word. For example:

#anagram?("gizmo", "sally")    #=> false
#anagram?("elvis", "lives")    #=> true

#Assume that there is no whitespace or punctuation in the given strings.



# O(n!)

def first_anagram?(str, target)
    
    new_str = str.split("").permutation
    new_str.each.any? {|word| word.join("") == target }

    # str.each_char.with_index do |el1, i1|
    #     words << el1
    #     str.each_char.with_index do |el2, i2|      # Part 1. Gets all anagrams
    #         if i2 > i1 
    #             words << str[i1..i2]
    #         end
    #     end
    # end



    # words.each do |word|
    #     if word.length == target.length #filter all anagrams to get to same length as target
    #         return true if (word.chars.all? {|char| target.include?(char)}) == true
    #     end
    # end
    # false
end

p first_anagram?("elvis", "lives")    #=> true
p first_anagram?("gizmo", "sally")    #=> false


#anagram?("elvis", "lives")    #=> true


#anagram?("ezis", "lives")    #=> true



# Write a method #second_anagram? that iterates over the 
# first string. For each letter in the first string, 
# find the index of that letter in the second string 
# (hint: use Array#find_index) and delete at that index. 
# The two strings are anagrams if an index is found for every letter and 
# the second string is empty at the end of the iteration.

# Try varying the length of the input strings. 
# What are the differences between #first_anagram? and #second_anagram??


# O(n^2)
def second_anagram?(str, target)
    str_arr = str.chars
    tar_arr = target.chars
    str_arr.each do |c|                     
        idx = tar_arr.find_index(c)
        return false unless idx
        tar_arr.delete_at(idx) 
    end
    tar_arr.empty?
end

#p second_anagram?("elvis", "lives")    #=> if second_str = ""  => true
#p second_anagram?("gizmo", "sally")    #=> if second_str = "asd"  => false

# O(n log(n)) for .sort
# O(n^2) for .bubble_sort

def third_anagram?(str1, str2)
    #str1.chars.sort == str2.chars.sort  

    alpha = ("a".."z").to_a
    sorted = false
    arr1 = str1.chars
    arr2 = str2.chars

    while !sorted
        sorted = true
        (0...arr1.length - 1).each do |i|
            if alpha.index(arr1[i]) > alpha.index(arr1[i + 1])     # n^2
                arr1[i], arr1[i + 1] = arr1[i + 1], arr1[i]
                sorted = false
            end
        end
    end

    sorted = false

    while !sorted
        sorted = true
        (0...arr2.length - 1).each do |i|
            if alpha.index(arr2[i]) > alpha.index(arr2[i + 1])
                arr2[i], arr2[i + 1] = arr2[i + 1], arr2[i]
                sorted = false
            end
        end
    end
    
    arr1.join('') == arr2.join('')

end

# p third_anagram?("elvis", "lives")# => true
# p third_anagram?("gizmo", "sally")#=> false
# p third_anagram?("gizmm", "sally")#=> false

#Write a method #third_anagram? that solves the problem by sorting both strings alphabetically. The strings are then anagrams if and only if the sorted versions are the identical.

#What is the time complexity of this solution? Is it better or worse than #second_anagram??





# Write one more method #fourth_anagram?. 
# This time, use two Hashes to store the number of times each letter appears in 
# both words. Compare the resulting hashes.

# What is the time complexity?

# Bonus: Do it with only one hash


# O(2n) => O(n)                => for space complexity O(1)?
def fourth_anagram?(str1, str2)
    counter1 = Hash.new(0)
    # counter2 = Hash.new(0)

    # str1.each_char {|c| counter1[c] += 1}
    # str2.each_char {|c| counter2[c] += 1}
    # counter1 == counter2

    str1.each_char {|c| counter1[c] += 1}
    str2.each_char {|c| counter1[c] -= 1}

    counter1.each_value.all? {|v| v == 0}
end

# p fourth_anagram?("elvis", "lives")# => true
# p fourth_anagram?("gizmo", "sally")#=> false
# p fourth_anagram?("gizmm", "sally")#=> false