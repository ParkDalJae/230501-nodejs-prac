example = [[1,2,3],[4,[5,6]],7,[8,9]]

def flatten(data):
    output = []
    for item in data:
        if type(item) == list:
            output += flatten(item) # 재귀적으로 처리
        else:
            output.append(item)
    return output

print(flatten(example))
input() # 실행 후 대기
