# compare triplets, award points for index in array being greater than other item at index in other array

bob = [1,2,3]
alice = [3,2,1]
def compareTriplets(a, b):
    result = [0,0]
    for index in range(len(a)):
        if a[index] > b[index]:
            result[0] += 1
        elif a[index] < b[index]:
            result[1] += 1
    return result

# print compareTriplets(bob,alice)
