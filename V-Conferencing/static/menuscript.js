const inputLink = () => {
  document.getElementById("form").style.display = "flex";
};
console.log("Hi");

let xhr = new XMLHttpRequest();

// let id = $("input");

// $(document).ready(() => {
//   $("#form").submit((e) => {
//     e.preventDefault();

//     let roomId = id.val();

//     // let jsonStr = JSON.stringify(json_obj);
//     console.log(id.val());

//     xhr.open("POST", "/join", true);
//     xhr.setRequestHeader("Content-Type", "x-www-form-urlencoded");
//     xhr.onload = () => {
//       console.log("Code sent");
//     };
//     xhr.send(roomId);

//     // $.ajax({
//     //   url: "/join",
//     //   type: "post",
//     //   contentType: "application/json",
//     //   data: jsonStr,
//     //   success: (response) => {
//     //     console.log(response, " SUccessful");
//     //   },
//     //   //   done(){
//     //   //     window.location.href("/join");

//     //   //   }
//     // });
//     id.val("");
//   });
// });
// console.log(id.val());
