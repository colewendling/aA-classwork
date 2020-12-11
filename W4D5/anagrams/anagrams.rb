#Write a method #first_anagram? that will generate and store all the possible anagrams of the first string. Check if the second string is one of these.

#What is the time complexity of this solution? What happens if you increase the size of the strings?

#Our goal today is to write a method that determines if two given words are anagrams. This means that the letters in one word can be rearranged to form the other word. For example:

#anagram?("gizmo", "sally")    #=> false
#anagram?("elvis", "lives")    #=> true

#Assume that there is no whitespace or punctuation in the given strings.




def first_anagram?(str, target)
    words = []

    str.each_char.with_index do |el1, i1|
        words << el1
        str.each_char.with_index do |el2, i2|      # Part 1. Gets all anagrams
            if i2 > i1 
                words << str[i1..i2]
            end
        end
    end



    words.each do |word|
        if word.length == target.length #filter all anagrams to get to same length as target
            return true if (word.chars.all? {|char| target.include?(char)}) == true
        end
    end
    false
end

# p first_anagram?("elvishhixs", "lives")    #=> true




# p first_anagram?("gizmo", "sally")    #=> false


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



def second_anagram?(str, target)
    str_arr = str.chars
    tar_arr = target.chars
    str_arr.each do |c|                     # "elvishhixs", "lives"
        idx = tar_arr.find_index(c)
        return false unless idx
        tar_arr.delete_at(idx) 
    end
    tar_arr.empty?
end

p second_anagram?("elvis", "lives")    #=> if second_str = ""  => true
p second_anagram?("gizmo", "sally")    #=> if second_str = "asd"  => false