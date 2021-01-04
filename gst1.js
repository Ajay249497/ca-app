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
			document.getElementById("GSTIN").innerHTML = obj.gstin;
			var table1 = document.getElementById("b2bdata");
			table1.innerHTML = "";
			var table2 = document.getElementById("b2badata");
			table2.innerHTML = "";
			if(obj.b2b != undefined){
				for(let i=0; i<obj.b2b.length; i++){
					var ctin = obj.b2b[i].ctin;
					for (j = 0; j<obj.b2b[i].inv.length;j++){
						var idt = obj.b2b[i].inv[j].idt;
						var inum = obj.b2b[i].inv[j].inum;
						var pos = obj.b2b[i].inv[j].pos;
						var rchrg = obj.b2b[i].inv[j].rchrg;
						for(let k=0;k<obj.b2b[i].inv[j].itms.length;k++){
							var itm_det = obj.b2b[i].inv[j].itms[k].itm_det;
							var txval = itm_det.txval;
							var rt = itm_det.rt;
							var iamt = 0, camt = 0, samt = 0;
							if(itm_det.iamt === undefined || itm_det.iamt === 0){
								camt = itm_det.camt;
								samt = itm_det.samt;
							} else {iamt = itm_det.iamt};
							var table1 = document.getElementById("b2bdata");
							var row = table1.insertRow(-1);
							var dctin = row.insertCell(0);
							var didt = row.insertCell(1);
							var dinum = row.insertCell(2);
							var dpos = row.insertCell(3);
							var drchrg = row.insertCell(4);
							var dtxval = row.insertCell(5);
							var drt = row.insertCell(6);
							var diamt = row.insertCell(7);
							var dcamt = row.insertCell(8);
							var dsamt = row.insertCell(9);
							dctin.innerHTML = ctin;
							didt.innerHTML = idt;
							dinum.innerHTML = inum;
							dpos.innerHTML = pos;
							drchrg.innerHTML = rchrg;
							dtxval.innerHTML = txval;
							drt.innerHTML = rt;
							diamt.innerHTML= iamt;
							dcamt.innerHTML = camt;
							dsamt.innerHTML = samt;
						}
					}
				}
			}
			if(obj.b2ba != undefined){
				for(let x=0;x<obj.b2ba.length;x++){
					var actin = obj.b2ba[x].ctin;
					for(let y=0;y<obj.b2ba[x].inv.length;y++){
						var aidt = obj.b2ba[x].inv[y].idt;
						var aoidt = obj.b2ba[x].inv[y].oidt;
						var apos = obj.b2ba[x].inv[y].pos;
						var ainum = obj.b2ba[x].inv[y].inum;
						var archrg = obj.b2ba[x].inv[y].rchrg;
						for(z=0;z<obj.b2ba[x].inv[y].itms.length;z++){
							var aitm_det = obj.b2ba[x].inv[y].itms[z].itm_det;
							var atxval = aitm_det.txval;
							var art = aitm_det.rt;
							var aiamt = 0, acamt = 0, asamt = 0;
							if(aitm_det.iamt === undefined || aitm_det.iamt === 0){
								acamt = aitm_det.camt;
								asamt = aitm_det.samt;
							} else {aiamt = aitm_det.iamt};
							var table2 = document.getElementById("b2badata");
							var row = table2.insertRow(-1);
							var adctin = row.insertCell(0);
							var adoidt = row.insertCell(1);
							var adidt = row.insertCell(2);
							var adinum = row.insertCell(3);
							var adpos = row.insertCell(4);
							var adrchrg = row.insertCell(5);
							var adtxval = row.insertCell(6);
							var adrt = row.insertCell(7);
							var adiamt = row.insertCell(8);
							var adcamt = row.insertCell(9);
							var adsamt = row.insertCell(10);
							adctin.innerHTML = actin;
							adoidt.innerHTML = aoidt;
							adidt.innerHTML = aidt;
							adinum.innerHTML = ainum;
							adpos.innerHTML = apos;
							adrchrg.innerHTML = archrg;
							adtxval.innerHTML = atxval;
							adrt.innerHTML = art;
							adiamt.innerHTML= aiamt;
							adcamt.innerHTML = acamt;
							adsamt.innerHTML = asamt;
						}
					}
				}
			}
		};
	} else {alert(`This version doesnot support files greater than ${maxSize} Kb`);}
}