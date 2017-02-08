module.exports = function convertcsv(startYear)
{
  if(typeof startYear !== 'number' || isNaN(startYear))
  {
        throw new Error('Not a number');
  }
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
	let dindex = sepTitle.indexOf('Description');
	let part2 = [];
	let viewline = [];
	let above = 0;
	let below = 0;
	for(let i = 1; i < dataString.length; i = i + 1)
		{  	viewline = dataString[i].split(/,(?=(?:(?:[^']*'){2})*[^']*$)/);
			PrimaryType = viewline[Pindex];
			year = viewline[yearindex];
			Description = viewline[dindex];
			if(year == 2008 && PrimaryType == 'THEFT')
			{ 	if(Description == 'OVER $500')
					above += 1;
				if(Description == '$500 AND UNDER')
					below += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.above$500 = above;
				temp.below$500 = below;
				/*	Copying temp object to part2 array	*/
				part2[0] = temp;
			}
       		if(year == 2009 && PrimaryType == 'THEFT')
			{ 	if(Description == 'OVER $500')
					above += 1;
				if(Description == '$500 AND UNDER')
					below += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.above$500 = above;
				temp.below$500 = below;
				/*	Copying temp object to part2 array	*/
				part2[1] = temp;
			}
			if(year == 2010 && PrimaryType == 'THEFT')
			{ 	if(Description == 'OVER $500')
					above += 1;
				if(Description == '$500 AND UNDER')
					below += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.above$500 = above;
				temp.below$500 = below;
				/*	Copying temp object to part2 array	*/
				part2[2] = temp;
			}
			if(year == 2011 && PrimaryType == 'THEFT')
			{ 	if(Description == 'OVER $500')
					above += 1;
				if(Description == '$500 AND UNDER')
					below += 1;
				let temp = {};
				temp.year = parseInt(year, 10);
				temp.above$500 = above;
				temp.below$500 = below;
				/*	Copying temp object to part2 array	*/
				part2[3] = temp;
			}

	}
		console.log(part2);
	/*	Converting array to JSON and writing it in writeFile	*/
	fs.writeFile('part2.json', JSON.stringify(part2), 'utf-8');
	});
}
