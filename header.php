<!DOCTYPE html>
<html lang="PT-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" rel="stylesheet">
  <title><?php bloginfo('name');?> <?php wp_title('|'); ?></title>
  <?php wp_head();?>
</head>
<body <?php body_class(); ?>>
<?php 
$img_url = get_template_directory_uri() . '/img-meufoot/logo';
$icon_url = get_template_directory_uri() . '/img-meufoot/icones';
$cart_count = WC()->cart->get_cart_contents_count();
?>

<div class="header__faixa">
<p class="font-1-up-xs az-04">Cadastre-se agora e ganhe 10%OFF na primeira compra</p>
  </div>
<header class="container">  
<button data-menu='button' class='menu-mobile' aria-expanded="false" aria-controls="mobile menu-categorias">Menu</button>
<div class="header__main"> 
  <div class="header__main--logo">
    <a href="/"><img src="<?= $img_url . '/logo.png' ?>" alt="Meu Foot"></a>
  </div>
  <div class="header__main--user-menu"> 
    <nav class="menu-login" >
      <ul id="mobile" data-menu='list'> 
      <li class="header__login--cadastro"><a href="/crie-sua-conta/" class="font-1-up-xs cz-09">Cadastre-se</a></li>
      <li class="header__login--minha-conta"><a href="/login/"class="font-1-up-xs cz-09">Login</a></li>
      </ul>
    </nav>
    <div class='grid-mobile'>
    <div class="header__main--busca">
      <form action="<?php bloginfo('url'); ?>/loja/" method='get'>
      <input type="text" name="s" id ="s" class="font-1-s" placeholder="Buscar" value="<?php the_search_query();?>">
        <input type="text" name="post_type" value="product" class="hidden">
        <button type="submit" id="searchbutton" value="Buscar">Buscar</button>
       </form>
    </div>
    <nav class="header__main--mini-menu">
     <div class=mini-menu-item>
       <a class="carrinho" href="carrinho/"><img src="<?= $icon_url . '/add_cart.svg' ?>" alt="">
        <?php if($cart_count) { ?>
       <span class="carrinho_cont"><?= $cart_count; ?></span>
       <?php } ?>
        <p class="font-1-up-xs rs-05" >Comprar</p>
        </a>
      </div>
    </nav>

  </div>

  
  <div data-menu='list' >  
    <?php
    wp_nav_menu([
      'menu'=> 'categorias',
      'container' => 'nav',
      'container_class' => '',
      ])
    ?>
    </div>   





  </div>
</header>
</div>
  <div class="header__main--vantagens">
  <div class=" header__main--vantagens-item">
  <img src="<?= $icon_url . '/credit_card.svg' ?>" alt="">
  <p class="font-2-up-m rs-05">Até 12x</p></div>
  <div class="header__main--vantagens-item">
  <img src="<?= $icon_url . '/secure.svg' ?>" alt="">
  <p class="font-2-up-m rs-05">Compras protegidas</p></div>
  <div class="header__main--vantagens-item">
  <img src="<?= $icon_url . '/shipping.svg' ?>" alt="">
  <p class="font-2-up-m rs-05">Frete Grátis</p></div>
  </div>
