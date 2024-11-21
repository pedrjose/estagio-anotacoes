# Matemática Para Sistemas Criptográficos

## Curva Elíptica
Uma curva elíptica é usada como base para alguns sistemas criptográficos, elas têm propriedades matemáticas que as tornam úteis para criptografia e fazem parte do sistema de assinatura digital usado no Bitcoin. **Veja seu funcionamento no exemplo abaixo**:

***y² = x³ + ax + b***
- Em criptografia, ***x*** pode ser derivado de dados como uma chave ou uma parte do texto a ser criptografado e o ***y*** é calculado com base na equação para encontrar um ponto válido na curva;
- ***a*** e ***b*** são parâmetros fixos que definem a forma exata da curva elíptica. Eles devem ser escolhidos cuidadosamente para garantir segurança e evitar vulnerabilidades matemáticas;
- Esses valores fazem parte da definição pública do sistema e garantem que todos os cálculos sigam as mesmas regras.

Existem diferentes tipos de curvas elípticas, como a ***Secp256k1***, usada para criptografia, Bitcoin e afins. **Entenda abaixo:**

- A curva ***Secp256k1*** é definida pela equação: ***y² = x³ + 7 (mod p)***;
- Não há termo linear, ou seja, ***a = 0***, e o termo constante é ***b = 7***;
- Os cálculos ocorrem sobre um campo finito 𝐹𝑝, onde 𝑝 é um número primo: ***𝑝 = 2²⁵⁶ − 2³² − 977***;
