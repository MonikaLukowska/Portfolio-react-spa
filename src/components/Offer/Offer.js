import React from "react";
import Block from './Block';
import FlexBox from '../FlexBox/FlexBox'

const Offer = () => {
  return (
    <section id="offer" >
      <h2 className="site-header site-header--medium">Oferta</h2>
      <FlexBox 
        justifyContent="space-between"
        alignContent="flex-start"
      >
        <Block 
          borderRight={'1px solid blue'}
          borderBottom={'1px solid blue'}
          heading="Web design/web development"
          icon=""
          content="Tworzę responsywne strony i sklepy internetowe, dbając o ich atrakcyjny i nowoczesny design, nie zapominając jednocześnie o odpowiedniej funkcjonalności i uzyteczności z punktu widzenia uzytkownika"
        />
       <Block
          borderBottom={'1px solid blue'}
          heading="CMS Wordpress"
          icon=""
          content="Klientom oczekującym mozliwości samodzielnej edycji treści na stronie oferuję strony i sklepy bazujące na CMS Wordpress. Buduję motyw autorski, bez zbędnych dodatków i wtyczek, które obciązają stronę i zakłócają odpowiedni odbiór przez uzytkownika końcowego"
        />
        <Block
          borderRight={'1px solid blue'}
          heading="PSD2HTML"
          icon=""
          content="Jeśli masz gotowy projekt przygotowany przez grafika i szukasz programisty, który go zakoduje, to jesteś we właściwym miejscu. Zamienię Twój projekt na czysty i przejrzysty kod, a gotową stronę umieszczę na wybranym serwerze"
        />
        <Block
          heading="Administracja"
          icon=""
          content="Opieka nad stroną bywa czasochłonna i kłopotliwa, a na pewno wolałbyś skupić się na prowadzeniu biznesu. Oferuję Ci usługę administracji strony, w skład której wchodzą wszelkie aktualizacje, wprowadzanie zmian oraz aktualizacja treści."
        />
      </FlexBox>
    </section>
  )
}

export default Offer