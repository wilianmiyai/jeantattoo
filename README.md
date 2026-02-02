# Jean Tattoo - Landing Page Premium

Landing page profissional para tatuador com design luxuoso em **preto e dourado**, focada em conversão via WhatsApp e Instagram.

![Paleta](https://img.shields.io/badge/Paleta-Preto%20%2B%20Dourado-D4AF37)
![Status](https://img.shields.io/badge/Status-Pronto%20para%20Uso-brightgreen)

---

##  Características

-  Design premium preto + dourado metálico
-  100% responsivo (mobile-first)
-  Botões sticky no mobile (WhatsApp + Instagram)
-  Portfólio com modal de visualização
-  Seção de vídeos (MP4, Instagram Reels, YouTube)
-  Formulário via Google Forms
-  SEO básico configurado
-  Animações suaves no scroll
-  Código limpo e comentado

---

##  Estrutura de Arquivos

```
tatuagem/
 index.html      # Página principal
 style.css       # Estilos (preto + dourado)
 script.js       # Funcionalidades e configurações
 README.md       # Este arquivo
 favicon.png     # (adicione seu favicon)
 videos/         # (crie esta pasta para seus vídeos)
     video1.mp4
     video2.mp4
     video3.mp4
```

---

##  ONDE EDITAR CADA COISA

### 1. WhatsApp e Instagram

Abra o arquivo **script.js** e edite o objeto `CONFIG` no início:

```javascript
const CONFIG = {
    // WhatsApp (apenas números)
    whatsappNumero: '555195085124',
    
    // Mensagem automática
    whatsappMensagem: 'Olá! Vim pelo site...',
    
    // Instagram (sem @)
    instagramUsuario: 'jeantattoo',
    ...
};
```

### 2. Imagens do Portfólio

No mesmo arquivo **script.js**, edite o array `portfolioImagens`:

```javascript
portfolioImagens: [
    {
        src: 'caminho/para/sua-imagem.jpg',  // URL ou caminho local
        alt: 'Descrição da imagem',
        titulo: 'Título exibido no hover'
    },
    // Adicione quantas imagens quiser...
]
```

**Dicas para imagens:**
- Use imagens quadradas (1:1) ou próximas disso
- Formatos aceitos: JPG, PNG, WebP
- Para melhor performance, use imagens de ~600x600px
- Pode usar URLs externas ou arquivos locais

### 3. Vídeos

No **script.js**, edite o array `videos`:

```javascript
videos: [
    // Vídeo MP4 local
    {
        tipo: 'mp4',
        src: 'videos/meu-video.mp4',
        poster: 'imagem-de-capa.jpg',
        titulo: 'Título do vídeo'
    },
    
    // Reel do Instagram
    {
        tipo: 'instagram',
        embedUrl: 'https://www.instagram.com/reel/CODIGO/embed',
        titulo: 'Meu Reel'
    },
    
    // YouTube
    {
        tipo: 'youtube',
        videoId: 'dQw4w9WgXcQ',  // ID do vídeo
        titulo: 'Vídeo YouTube'
    }
]
```

### 4. Google Forms (Formulário de Orçamento)

1. Acesse [Google Forms](https://forms.google.com)
2. Crie seu formulário com os campos desejados (ex: Nome, WhatsApp, Descrição da tatuagem, Referências)
3. Clique em **Enviar** (canto superior direito)
4. Clique no ícone **< >** (Incorporar)
5. Copie o código do iframe
6. No **index.html**, encontre a seção `<!-- PLACEHOLDER -->` e substitua pelo iframe:

```html
<iframe 
    src="https://docs.google.com/forms/d/e/SEU_ID/viewform?embedded=true"
    width="100%" 
    height="800" 
    frameborder="0" 
    class="google-form-iframe">
</iframe>
```

**Como ver as respostas:**
1. No Google Forms, clique na aba "Respostas"
2. Clique no ícone verde do Google Sheets
3. Uma planilha será criada automaticamente com todas as respostas!

### 5. Destaques do Instagram

No **index.html**, edite a seção de stories para apontar para seus destaques reais:

```html
<a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDQ..." class="story-item">
    ...
</a>
```

---

##  Sobre Instagram Stories (IMPORTANTE)

### O que NÃO é possível fazer:

 **Puxar Stories automaticamente** - O Instagram **não oferece API pública** para acessar Stories de forma automática. A API de Stories só está disponível para apps aprovados pelo Facebook/Meta.

### Alternativas implementadas:

 **Destaques manuais** - Links para os Destaques do seu perfil (funciona!)

 **Embeds de Reels** - Você pode incorporar Reels específicos na seção de vídeos

 **Widgets de terceiros** (opção paga):
- [Elfsight](https://elfsight.com/instagram-widget/) - Widget de feed do Instagram
- [SnapWidget](https://snapwidget.com/) - Embeds de feed
- [LightWidget](https://lightwidget.com/) - Feed responsivo

 Esses widgets são pagos e dependem de serviços externos.

---

##  Como Publicar no GitHub Pages

### Passo a Passo:

1. **Crie uma conta no GitHub** (se ainda não tiver):
   - Acesse [github.com](https://github.com) e crie sua conta

2. **Crie um novo repositório**:
   - Clique em **"New"** ou **"Novo repositório"**
   - Nome sugerido: `jeantattoo` ou `meusite`
   - Deixe como **Público**
   - **NÃO** marque "Add a README file"
   - Clique em **"Create repository"**

3. **Faça upload dos arquivos**:
   - Na página do repositório, clique em **"uploading an existing file"**
   - Arraste os 3 arquivos: `index.html`, `style.css`, `script.js`
   - Clique em **"Commit changes"**

4. **Ative o GitHub Pages**:
   - Vá em **Settings** (Configurações)
   - No menu lateral, clique em **Pages**
   - Em "Source", selecione **"Deploy from a branch"**
   - Em "Branch", selecione **"main"** e **"/ (root)"**
   - Clique em **Save**

5. **Aguarde alguns minutos** e seu site estará no ar em:
   ```
   https://seuusuario.github.io/nomedorepositorio/
   ```

### Usando domínio próprio (opcional):

1. No GitHub Pages, adicione seu domínio em "Custom domain"
2. No seu provedor de domínio, configure:
   - Registro CNAME apontando para `seuusuario.github.io`
   - Ou registros A para os IPs do GitHub Pages

---

##  Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Preto Absoluto | `#000000` | Fundo principal |
| Preto Suave | `#0B0B0B` | Seções alternadas |
| Dourado | `#D4AF37` | Acentos, botões, textos destaque |
| Dourado Claro | `#E5C158` | Hover, gradientes |
| Branco | `#FFFFFF` | Textos principais |
| Cinza | `#999999` | Textos secundários |

---

##  Checklist Final

Antes de publicar, verifique:

- [ ] Número do WhatsApp correto
- [ ] @ do Instagram correto
- [ ] Imagens do portfólio substituídas pelas suas
- [ ] Vídeos adicionados (ou seção removida)
- [ ] Google Forms configurado
- [ ] Favicon adicionado
- [ ] Meta tags de SEO atualizadas (título, descrição)
- [ ] Open Graph atualizado (imagem de compartilhamento)
- [ ] Testado no celular
- [ ] Google Analytics ID configurado
- [ ] Chave PIX atualizada no Code.gs

---

## 🆕 Novas Funcionalidades (v2.0)

### 🌐 Site
- **Loader Estilizado** - Animação de máquina de tatuagem no carregamento
- **Cursor Temático** - Cursor personalizado dourado (apenas desktop)
- **Animações de Scroll** - Elementos aparecem suavemente ao rolar
- **FAQ Acordeão** - Perguntas frequentes expandíveis
- **Blog/Dicas** - Seção de artigos sobre tatuagem
- **Mapa do Estúdio** - Google Maps integrado
- **Filtro de Categorias** - Galeria filtrada por estilo (Realismo, Blackwork, etc)
- **SEO Avançado** - Schema.org, sitemap.xml, robots.txt, meta tags completas
- **Google Analytics** - Rastreamento de visitas e conversões
- **Lazy Loading** - Carregamento otimizado de imagens

### 📅 Sistema de Agendamento
- **Página Pública de Horários** - Cliente pode ver horários disponíveis
  - Acesse: `SUA_URL?action=horarios`
- **Cancelamento pelo Cliente** - Link para cancelar com 24h de antecedência
  - Link incluído automaticamente na confirmação
- **Integração PIX** - Dados para pagamento de sinal
  - Configure no `PIX_CONFIG` dentro do Code.gs
- **Notificações Automáticas** - Admin recebe aviso de cancelamentos

### 🔧 Para Ativar

1. **Google Analytics**: Substitua `G-XXXXXXXXXX` pelo seu ID no index.html
2. **Chave PIX**: Edite `PIX_CONFIG` no Code.gs com sua chave
3. **Deploy**: Publique nova versão do Apps Script

---

##  Dicas de Performance

1. **Otimize suas imagens** antes de subir:
   - Use [TinyPNG](https://tinypng.com/) para comprimir
   - Tamanho ideal: 600x600px para portfólio

2. **Vídeos**:
   - Comprima seus MP4 antes de subir
   - Use [HandBrake](https://handbrake.fr/) para comprimir

3. **Teste no celular** antes de publicar

---

## 🔗 Links Importantes

- **Painel Admin**: `SUA_URL?action=admin&senha=jean2026`
- **Horários Públicos**: `SUA_URL?action=horarios`
- **WhatsApp**: +55 51 9508-5124
- **Instagram**: @jeantattoo

---

Feito com  para Jean Tattoo
