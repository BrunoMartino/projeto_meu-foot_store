
  <footer class="footer__bg">
    <div class="footer__content container">
      <div class="footer__content--categorias">
        <h3 class="font-1-up-l rs-02">Categorias:</h3>
        <?php
          wp_nav_menu([
          'menu'=> 'footer__content--categorias',
          'container' => 'nav',
          'container_class' => 'footer__content--categorias-gridbox',
           ])
        ?>
      </div>
      <nav class="footer__content--contact">
        <h3 class="font-1-up-l rs-02">Contato:</h3>
        <ul>
          <li class="email"><a class="font-1-s rs-04 " href="mailto:atendimento@meufoot.com.br">atendimento@meufoot.com.br</a></li>
          <li class="wapp"><a class="font-1-s rs-04 " href="https://wa.me/5531991204061">(31) 99120-4061</a></li>
        </ul>
      </nav>
      <nav class="footer__content--intern-pages">
      <h3 class="font-1-up-l rs-02">Páginas úteis:</h3>
        <ul>
         <li><a class="font-1-s rs-04" href="#">LGPD</a></li>
          <li><a class="font-1-s rs-04" href="#">Prazos de Entrega</a></li>
          <li><a class="font-1-s rs-04" href="#">Termos e Condições Gerais</a></li>
          <li><a class="font-1-s rs-04" href="#">Termos de Reembolso e Retorno</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__content--end">
            <p class="font-1-xs cz-08">Meu FOOT - 65.481.231/0001-00  - 2023 - ₢ todos os direitos reservados</p>
            <a class="font-1-xs cz-08" href="#">Desenvolvido por: B&D WebDev</a>
    </div>
  </footer>

<?php wp_footer();?>
<script type='module' src="<?= get_stylesheet_directory_uri(); ?>/main/main.js"></script>
</body> 
</html>

