let x;
if (typeof x === "undefined") x = 20;

export function createPerson(
  firstName: string,
  lastName?: string
): { firstName: string; lastName?: string } {
  return {
    firstName: firstName.toUpperCase(),
    lastName: lastName?.toUpperCase(),
  };
}

function squareOf(x: any) {
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwo = squareOf(2);

if (typeof squareOfTwo == null) {
  console.log("Conta inválida");
} else {
  console.log("Resultado: " + squareOfTwo);
}
