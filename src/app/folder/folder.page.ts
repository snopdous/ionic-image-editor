import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public image_id=[];
  text_color:any;
  image_layer:any=null;
  public template:any={
    layars:
      [
        {layer_id:1,layer_type:'image', layer_name:'image 1',frame:'assets/image/frame_2.jpg',width:'39.0625',height:'39.0625',top:'30.46875',left:'30.46875'},
        {layer_id:2,layer_type:'frame',frame:'assets/image/frame_1.png'},
        {layer_id:3,layer_type:'frame',frame:'assets/image/frame_3.png'},
        {layer_id:4,layer_type:'text', top:'80',left:'10',font:'20',family:'san sarif',color:"green"}
      ],
    };
  imagePath: any;
  constructor(private activatedRoute: ActivatedRoute){ 

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() { 
  }
public message: string;
sel_change()
{
  alert(this.image_layer);
}
preview(file){
  let id = this.image_layer;
  let files = file.files;
  console.log(this.image_layer)
  // return;
  if (files.length === 0)
  return;
  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.message = "Only images are supported.";
    return;
  }
  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]); 
  reader.onload = (_event) => { 
    this.template['layars'][id].frame = reader.result; 
    }
    file.value="";
  }

  color_change()
  {
    this.template['layars'][3].color = this.text_color;
  }
}
