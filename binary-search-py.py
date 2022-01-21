#binary search function
def binarysearch(nums, target):
    left = 0
    right = len(nums) - 1
    while left <= right:
        mid = left + (right-left)//2
        if(nums[mid] == target):
            return mid
        elif(nums[mid]< target):
            left = mid +1
        else:
            right = mid -1
    return -1

# creating an empty list
lst = []
 
# number of elements as input
n = int(input("Enter number of elements : "))
 
# iterating till the range
for i in range(0, n):
    ele = int(input()) 
    lst.append(ele) # adding the element
     
print(lst)

#Enter the target element
tar = int(input("Enter the target element : "))

print(binarysearch(lst, tar))


#Notes:
# Using / is normal division in python
# Using // is floor division in python. 
