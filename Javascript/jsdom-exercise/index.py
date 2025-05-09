def prime(n):
    for i in range(2,n//2+1):
        if n%1 ==0:
            return False
    else:
        return True
N=int(input())
if N>=2:
    c=0
    for j in range(2,N//2+1):
        if prime(j)  and prime(N-j):
            c+=1
            print(j,"+",N-j)
            if c==0:
                print("no")
            else:
                print("no")
