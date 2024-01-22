import { NextResponse } from "next/server";
import { promises as fs } from 'fs';


export async function GET(request) {
    // Fetch data from related url contained as url within request. 
    const req_addr = request.url.split('/').pop()
    
    // Load address metadata
    const file = await fs.readFile(process.cwd() + '/app/data/data.json', 'utf8');
    const content = file.replaceAll('@id', 'link');
    const data = JSON.parse(content);

    // Filter for required address
    var resp = '';
    data.forEach(element => {
        if(element.address === req_addr){
            resp = element;
        } else {
            // Do nothing           
        }
    });
    
    return NextResponse.json({ Answer: resp });
}