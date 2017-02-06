const fs = require('fs');
let readfile = fs.createReadStream('crimedata.csv', 'utf-8');
let data = '';
readfile.on('data', function(chunk) {
	data += chunk;
});
readfile.on('end', function() {
	let StringData = data.toString();
	let dataString = StringData.split('\n');
	let sepTitle = dataString[0].split(',');
	let year = [];
	let PrimaryType = [];
	let arrest = [];
	let yearindex = sepTitle.indexOf('Year');
	let Pindex = sepTitle.indexOf('PrimaryType');
	let aindex = sepTitle.indexOf('Arrest');
	let part2 = [];
	let viewline = [];
	let assaultArrest = 0;
	let assaultNotArrest = 0;
	for(let i = 1; i < dataString.length; i = i + 1)
		{  	viewline = dataString[i].split(/,(?=(?:(?:[^']*'){2})*[^']*$)/);
			PrimaryType = viewline[Pindex];
			year = viewline[yearindex];
			arrest = viewline[aindex];
			if(year === 2008 && PrimaryType === 'ASSAULT')
			/*	Calculating assault arrest if TRUE and not arrest if FALSE	*/
			{ 	if(arrest === 'TRUE')
					assaultArrest += 1;
				if(arrest === 'FALSE')
					assaultNotArrest += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.assaultArrest = assaultArrest;
				temp.assaultNotArrest = assaultNotArrest;
				/*	Copying temp object to part2 array	*/
				part2[0] = temp;
			}
        /*	finding out the arrested and non arrested count for spcific yearindex	*/
		if(year === 2009 && PrimaryType === 'ASSAULT')
			/*	Calculating assault arrest if TRUE and not arrest if FALSE	*/
			{ 	if(arrest === 'TRUE')
					assaultArrest += 1;
				if(arrest === 'FALSE')
					assaultNotArrest += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.assaultArrest = assaultArrest;
				temp.assaultNotArrest = assaultNotArrest;
				/*	Copying temp object to part2 array	*/
				part2[1] = temp;
			}
		if(year === 2010 && PrimaryType === 'ASSAULT')
			/*	Calculating assault arrest if TRUE and not arrest if FALSE	*/
			{ 	if(arrest === 'TRUE')
					assaultArrest += 1;
				if(arrest === 'FALSE')
					assaultNotArrest += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.assaultArrest = assaultArrest;
				temp.assaultNotArrest = assaultNotArrest;
				/*	Copying temp object to part2 array	*/
				part2[2] = temp;
			}
			if(year === 2011 && PrimaryType === 'ASSAULT')
				/*	Calculating assault arrest if TRUE and not arrest if FALSE	*/
			{ 	if(arrest === 'TRUE')
					assaultArrest += 1;
				if(arrest === 'FALSE')
					assaultNotArrest += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.assaultArrest = assaultArrest;
				temp.assaultNotArrest = assaultNotArrest;
				/*	Copying temp object to part2 array	*/
				part2[3] = temp;
			}
		}
	/*	Converting array to JSON and writing it in writeFile	*/
	fs.writeFile('part2.json', JSON.stringify(part2), 'utf-8');
	});
