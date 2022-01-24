const exemploBanco = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type UsuarioBanco = {
    cliente: string,
    saldoTotal : number,
    debitos: Array<number>
}

const precisaDeEmprestimo = (usuarios : Array<Object>) : Array<UsuarioBanco> => {
    const contas : Array<UsuarioBanco> = usuarios.map((us) => {
        return us as UsuarioBanco
    })

    return contas.map((usuario) : UsuarioBanco => {
        usuario.debitos.forEach(debito => {
            usuario.saldoTotal = usuario.saldoTotal - debito
        });
        usuario.debitos = []
        return usuario
    }).filter((filtered) => {
        return filtered.saldoTotal < 0
    })
}

console.log(precisaDeEmprestimo(exemploBanco))