<!DOCTYPE html>
<html lang="PT-BR">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Os calçados mais modernos, bem feitos e com ótimo preço estão aqui. Tenis, Botas, Sandálias, Pantufas, Meias, Sapatilhas e Sapatos em geral, para todas as idades, genêros, gostos e vontades.">
<link rel="shortcut icon" href="<?= get_template_directory_uri() . '/img-meufoot/favicon.webp' ?>" type="image/x-icon">
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

<header>
<div class="header_faixa">
<p class="font-1-up-xs az-04">Cadastre-se agora e ganhe 10%OFF na primeira compra</p>
</div>
<div class='header_flex container'>
<div class='header_logo'>
<a href="/"><img src="<?= $img_url . '/logo.webp'?>" alt="Meu Foot" width='255' height='160'></a>
</div>
<div class='header_menu'>
    <div class='header_menu--first'>
    <button data-menu='button' class='menu-mobile' aria-expanded='false'>Menu</button>
  <ul class='login-options' id='mobile' data-menu='list'>
    <li><a href="/crie-sua-conta/" class="font-1-up-xs cz-09 meufoot-sign_up">Crie sua Conta!</a></li>
    <li><a href="/login/" class="font-1-up-xs cz-09 meufoot-login">Login</a></li>
  </ul>
  <div class="header_search">
      <form action="<?php bloginfo('url'); ?>/loja/" method='get'>
      <input type="text" name="s" id ="s" class="font-1-s" placeholder="Buscar" value="<?php the_search_query();?>">
        <input type="text" name="post_type" value="product" class="hidden">
        <button type="submit" id="searchbutton" value="Buscar">Buscar</button>
       </form>
  </div>
  <a class="meufoot_cart" href="/carrinho"><img src="<?= $icon_url . '/add_cart.svg' ?>" alt="carrinho"  width="40" height="40">
        <?php if($cart_count) { ?>
       <span class="meufoot_cart-cont"><?= $cart_count; ?></span>
       <?php } ?>
        <p class="font-1-up-xs rs-05">Comprar</p>
  </a>
    </div>
    <div data-menu='list' >  
    <?php
    wp_nav_menu([
      'menu'=> 'categorias',
      'container' => 'nav',
      'container_class' => 'header_menu--second',
      ])
    ?>
  </div>
</div>
</div>
</div>
<div class="header_vantagens">
  <div class=" header_vantagens-item">
  <img src="<?= $icon_url . '/credit_card.svg' ?>" alt="" width="28" height="20">
  <p class="font-2-up-m rs-05">Até 12x</p></div>
  <div class="header_vantagens-item">
  <img src="<?= $icon_url . '/secure.svg' ?>" alt="" width="20" height="20">
  <p class="font-2-up-m rs-05">Compras protegidas</p></div>
  <div class="header_vantagens-item">
  <img src="<?= $icon_url . '/shipping.svg' ?>" alt="" width="28" height="20">
  <p class="font-2-up-m rs-05">Frete Grátis</p></div>
</div>  









</header>