citations = [5, 9, 2, 8, 7, 7, 3, 1]

# 내림차순 정렬
citations.sort(reverse=True)
answer = 0
for i in range(len(citations)):
    # i번째 논문이 (i + 1)회 이상 인용되었는지 확인
    if i + 1 <= citations[i]:
        answer = i + 1

# 정답 출력
print(answer)