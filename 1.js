<script>
function solution(record) {
	var answer = [];
	var data = [];
	var log = [];
	for (var i = 0;i < record.length; i++) {
		str = record[i].split(' ');
		if(str[0] == "Enter"){
			data[str[1]] = {'name' : str[2]};
			var log_item = {'id' : str[1], 'action' : 'came in'};
			log.push(log_item);
		}
		else if(str[0] == "Leave"){
			var log_item = {'id' : str[1], 'action' : 'has left'};
			log.push(log_item);
		}
		else if(str[0] == "Change")
			data[str[1]]['name'] = str[2];
	}
	for (var i = 0;i < log.length; i++) {
		var answer_item = data[log[i]['id']]['name'] + " " + log[i]['action'] + ".";
		answer.push(answer_item);
	}
	return answer;
}
//console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
</script>
