<?php get_header(); ?>

<div class="container breadcrumb"><?php woocommerce_breadcrumb(['delimiter' => '>']); ?></div>

<div class='container notificacao'> 
  <?php wc_print_notices(); ?>
</div>

<main class="container product-main">
<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $product_data = meufoot_format_single_product(get_the_ID(), $image_size = 'product-gallery');
?>
  <div class="product-gallery" data-gallery="gallery">
    <div class="product-gallery__list">
      <div class='prev'></div>
      <ul class='gallery-slide'>
      <?php foreach($product_data['gallery'] as $img) { ?>
        <li class='gallery-slide__img'><img data-gallery="gallery-list" src="<?= $img; ?>" alt="<?= $product_data['name']; ?>" loading='lazy'></li>
        <?php } ?>
      </ul>
      <div class='next'></div>
    </div>
    <div class="product-gallery__main">
        <img data-gallery="gallery-main" src="<?= $product_data['img']; ?>" alt="<?= $product_data['name']; ?>" loading='lazy'>
    </div>
  </div>
  <section class="product-info">
    <small class='font-1-up-xs'><?= 'sku: ' . $product_data['sku']; ?></small>
    <h1 class="font-2-up-l"><?= $product_data['name']; ?></h1>
    <div class="product-info__price" >
      <p class="product-info__price-reg font-1-s">R$ <?= $product_data['regular-price']; ?></p>
      <p class="product-info__price-sell font-1-l">R$ <?= $product_data['sell-price']; ?></p>
    </div>
    <div class='product-info__variations'>
    <?php meufoot_get_product_variation(get_the_ID()) ?>
    </div>
    
    <div class='btn-flexbox'>
    <?php woocommerce_template_single_add_to_cart(); ?>
    <div>
      <p class="fret-p font-1-up-s">Frete Grátis</p>
      <p class="card-p font-1-up-s">Até 12x</p>
    </div>
    </div>
  </section>
<?php } } ?>
</main>
<section class='container'>
  <div class='product-description'>
  <h2 class="font-1-up-s">Descrição</h2>
  <p><?= $product_data['description']; ?></p>

  </div>

</section>

<?php
$related_ids = wc_get_related_products($product_data['id'],3);
$related_products = [];
foreach($related_ids as $product_id) {
  $related_products[] = wc_get_product($product_id);
}
$related = format_products($related_products);
?>
<section class="container">

<div class="product-related">
<h2 class="font-1-up-l product-related__title">As Pessoas também procuram:</h2>
  <?php meufoot_product_list($related); ?>
</div>
</section>
<?php get_footer(); ?>

<?php

?>