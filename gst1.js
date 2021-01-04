async function runCmd(e){
	let file = e.files[0];
	let month = {"04":"Apr","05":"May","06":"June","07":"July","08":"Aug","09":"Sept","10":"Oct","11":"Nov","12":"Dec","01":"Jan","02":"Feb","03":"Mar"}
	var maxSize = 7000000;
	if (file.size < maxSize){
		let Reader = new FileReader();
		Reader.readAsText(file);
		Reader.onload = () =>{
			let data = Reader.result;
			var obj = JSON.parse(data);
			document.getElementById("fp").innerHTML = "Filing Month:"  + month[obj.fp.slice(0,2)] + "," + obj.fp.slice(2);
			var table1 = document.getElementById("b2bdata");
			table1.innerHTML = "";
			if(obj.b2b != undefined){
				for(let i=0; i<obj.b2b.length; i++){
					var ctin = obj.b2b[i].ctin;
					for (j = 0; j<obj.b2b[i].inv.length;j++){
						var idt = obj.b2b[i].inv[j].idt;
						var inum = obj.b2b[i].inv[j].inum;
						var pos = obj.b2b[i].inv[j].pos;
						for(let k=0;k<obj.b2b[i].inv[j].itms.length;k++){
							var itm_det = obj.b2b[i].inv[j].itms[k].itm_det;
							var txval = itm_det.txval;
							var rt = itm_det.rt;
							var iamt = 0, camt = 0, samt = 0;
							if(itm_det.iamt === undefined){
								camt = itm_det.camt;
								samt = itm_det.samt;
							} else {iamt = itm_det.iamt};
							var table1 = document.getElementById("b2bdata");
							var row = table1.insertRow(-1);
							var dctin = row.insertCell(0);
							var didt = row.insertCell(1);
							var dinum = row.insertCell(2);
							var dpos = row.insertCell(3);
							var dtxval = row.insertCell(4);
							var drt = row.insertCell(5);
							var diamt = row.insertCell(6);
							var dcamt = row.insertCell(7);
							var dsamt = row.insertCell(8);
							dctin.innerHTML = ctin;
							didt.innerHTML = idt;
							dinum.innerHTML = inum;
							dpos.innerHTML = pos;
							dtxval.innerHTML = txval;
							drt.innerHTML = rt;
							diamt.innerHTML= iamt;
							dcamt.innerHTML = camt;
							dsamt.innerHTML = samt;
						}
					}
				}
			}
		};
	} else {alert(`This version doesnot support files greater than ${maxSize} Kb`);}
}