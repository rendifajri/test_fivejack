<script>
function solution(relation) {
    var answer = 0;
	var row = relation.length;
	var column = relation[0].length;
	for(var c = 0; c < column; c++){
		var dup_data = false;
		for(var i = 0; i < row; i++){
			for(var j = 0; j < row; j++){
				if(i != j && relation[i][c] == relation[j][c]){
					dup_data = true;
					break;
				}
			}
		}
		if(!dup_data)
			answer++;
	}
	for(var c = 0; c < column; c++){
		var dup_data = false;
		for(var d = 0; d < column; d++){
			for(var i = 0; i < row; i++){
				for(var j = 0; j < row; j++){
					var str1 = relation[i][c] + " " + relation[i][d];
					var str2 = relation[j][c] + " " + relation[j][d];
					if(c != d && i != j && str1 == str2){
						dup_data = true;
						break;
					}
				}
			}
		}
		if(!dup_data)
			answer++;
	}
    return answer;
}
//console.log(solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]));
</script>
