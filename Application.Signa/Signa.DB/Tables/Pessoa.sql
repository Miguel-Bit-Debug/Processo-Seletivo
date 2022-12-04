CREATE TABLE [dbo].[Pessoa]
(
	[PessoaId] INT NOT NULL IDENTITY PRIMARY KEY, 
    [NomeFantasia] VARCHAR(255) NOT NULL, 
    [CpfCnpj] VARCHAR(20) NOT NULL
)
