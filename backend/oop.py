from typing import TypeVar

# override: preferir do typing (py3.12+); fallback para typing_extensions se necessário
# try:
from typing import override  # type: ignore
# except Exception:
# from typing_extensions import override  # type: ignore << vem de versão antiga do python


class Pessoa:
    """
    Classe base que modela uma pessoa genérica.
    """

    nome: str
    idade: int
    altura: float
    cidade: str

    def __init__(self, nome: str, idade: int, altura: float, cidade: str) -> None:
        self.nome = nome
        self.idade = idade
        self.altura = altura
        self.cidade = cidade

    def speak(self) -> None:
        """
        Fala uma frase padrão com as informações da pessoa.
        """
        print(
            f"Oi, meu nome é {self.nome}, tenho {self.idade} anos, "
            + f"moro em {self.cidade} e tenho {self.altura:.2f}m de altura."
        )


# Agora que Pessoa está definida, podemos criar o TypeVar ligado a ela.
T = TypeVar("T", bound=Pessoa)


class Dev(Pessoa):
    """
    Subclasse de Pessoa que representa um desenvolvedor.
    """

    tempo: int
    lang: str

    def __init__(
        self,
        nome: str,
        idade: int,
        altura: float,
        cidade: str,
        tempo: int,
        lang: str,
    ) -> None:
        super().__init__(nome, idade, altura, cidade)  # herança
        self.tempo = tempo
        self.lang = lang

    @classmethod  # reatribuição
    def from_base(cls: type["Dev"], base: Pessoa, tempo: int, lang: str) -> "Dev":
        """
        Cria uma instância de Dev a partir de uma instância de Pessoa.
        """
        # usa os atributos públicos da instância base para construir a nova
        return cls(base.nome, base.idade, base.altura, base.cidade, tempo, lang)

    @override  # polimorfismo
    def speak(self) -> None:
        """
        Override do método speak() da classe base.
        """
        print(
            f"Oi, sou {self.nome}, moro em {self.cidade}, tenho {self.idade} anos "
            + f"e programo há {self.tempo} anos usando {self.lang}."
        )


if __name__ == "__main__":
    # Instâncias de Pessoa
    p1 = Pessoa("Emanuel", 20, 1.89, "Macaé")
    p2 = Pessoa("Vítor", 18, 1.75, "Rio das Ostras")
    p3 = Pessoa("Otávio", 20, 1.8, "Macáe")

    # Polimorfismo: mesma função, comportamentos diferentes
    p1.speak()
    p2.speak()
    p3.speak()

    print()

    # Criando Devs a partir de Pessoas (fábrica @classmethod)
    dev1 = Dev.from_base(p1, tempo=2, lang="Python")
    dev2 = Dev.from_base(p2, tempo=1, lang="JavaScript")
    dev3 = Dev.from_base(p3, tempo=1, lang="Rust")

    # Métodos sobrescritos (override)
    dev1.speak()
    dev2.speak()
    dev3.speak()
