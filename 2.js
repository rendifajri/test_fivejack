<script>
function solution(N, users) {
	var answer = [];
	var data = [];
	for (var i = 1;i <= N; i++) {
		var cnt_total = users.length;
		var cnt_user = 0;
		while(users.indexOf(i) != -1){
			var index_user = users.indexOf(i);
			cnt_user++;
			users.splice(index_user, 1);
		}
		var rate = cnt_user/cnt_total;
		var data_item = {'id' : i, 'rate' : rate};
		data.push(data_item);
	}
	data.sort(function (a, b) {
		if(a.rate != b.rate)
			return b.rate - a.rate;
		else
			return a.id > b.id;
	});
	for (var i = 0;i < data.length; i++) {
		var answer_item = data[i]['id'];
		answer.push(answer_item);
	}
	return answer;
}
//console.log(solution(5, [2,1,2,6,2,4,3,3]));
</script>
