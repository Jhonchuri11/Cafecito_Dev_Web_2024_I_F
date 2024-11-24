import {MatTableDataSource} from '@angular/material/table';
import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-albums',
  templateUrl: './create-albums.component.html',
  styleUrl: './create-albums.component.css'
})
export class CreateAlbumsComponent {

  nombre_album: string = "";
  artista: string = "";
  anio_lanzamiento: number = 0;
  currectAlbumID = "";


  displayedColumns: string[] = ['id','nombre_album', 'artista', 'anio_lanzamiento', 'action'];

  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator!) paginator!: MatPaginator;


  constructor(private http: HttpClient ) {
    this.getAllAlbum();
  }

  getAllAlbum() {
    this.http.get("http://localhost:8088/cafecito/albums/all").subscribe((resultData:any) => {
      this.dataSource = new MatTableDataSource(resultData);
      this.dataSource.paginator = this.paginator;

      //console.log(resultData);
    });
  }

  registerAlbum() {
    let bodyData = {
      "nombre_album": this.nombre_album,
      "artista": this.artista,
      "anio_lanzamiento": this.anio_lanzamiento
    }

    this.http.post("http://localhost:8088/cafecito/albums/create", bodyData).subscribe((resultData: any)=> {
      alert("Album registration succesfull!")
      this.getAllAlbum();

      this.nombre_album = "";
      this.artista = "";
      this.anio_lanzamiento = 0;

    })
  }

  setUpdate(data: any) 
  {
    this.nombre_album = data.nombre_album;
    this.artista = data.artista;
    this.anio_lanzamiento = data.anio_lanzamiento;
    this.currectAlbumID = data.id;

  }

  updateData() {
    let bodyData = {
      "id": this.currectAlbumID,
      "nombre_album": this.nombre_album,
      "artista": this.artista,
      "anio_lanzamiento": this.anio_lanzamiento
    }

    this.http.put("http://localhost:8088/cafecito/albums/update/${id}", bodyData).subscribe((resultData: any)=> {
      alert("Album update succesfull!")
      this.getAllAlbum();

      this.nombre_album = "";
      this.artista = "";
      this.anio_lanzamiento = 0;

    })
  }

  saveD() {
    if (this.currectAlbumID == "") {
      this.registerAlbum();
    } else {
      this.updateData();
    }

  }

  setDelete(data: any) {
    this.http.delete("http://localhost:8088/cafecito/albums/delete" + "/" + data.id).subscribe((resultData:any) =>{
      alert("Elimando correctamente!");
      this.getAllAlbum();
    })
  }
  
}
