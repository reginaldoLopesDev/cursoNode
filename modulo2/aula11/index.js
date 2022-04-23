function a() {
    console.log(`Executando a função A()`);
}
function b() {
    console.log(`Executando a função B()`);
}
function c() {
    console.log(`Executando a função C()`);
    b();
    a();
}
c();
