import React from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text } from "react-native";
import WebView from "react-native-webview";

const TerminosYCondiciones = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{"Versión: 1.0 (Beta)"}</Text>
        <Text style={styles.text}>{"Powered by:"}</Text>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/img/watson.png")}
            style={styles.watsonImg}
          />
          <Image
            source={require("../assets/img/ibmcloudicon.png")}
            style={styles.ibmCloudImg}
          />
        </View>
      </View>
      <WebView
        source={{ html: terminosHtml }}
        originWhitelist={["*"]}
        style={{ flex: 1 }}
        scalesPageToFit={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: "5%",
  },
  text: {
    paddingVertical: 10,
    color: "#454440",
  },
  imgContainer: {
    flexDirection: "row",
  },
  watsonImg: {
    resizeMode: "contain",
    height: 50,
    width: 150,
  },
  ibmCloudImg: {
    resizeMode: "contain",
    height: 50,
    width: 150,
  },
});

export default TerminosYCondiciones;

const terminosHtml = `
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
    <style> body { margin: 0 }</style>
</head>
<body>
<p>TÉRMINOS Y CONDICIONES DE AGP:</p>
    <p>Este Acuerdo gobierna su uso de los servicios de AGP ("Servicios") mediante los
    cuales puede, obtener, licenciar, alquilar o subscribirse (cuando sea posible) a
    medios y otros servicios (en conjunto "Contenido"). Para usar nuestros Servicios,
    necesita hardware y software compatible (se recomienda tener la última versión
    y en algunos casos es necesario) y acceso a Internet (podrán aplicarse cargos).
    El rendimiento de nuestros servicios podrá verse afectado por estos factores.</p>
    <p>ID DE AGP</p>
    <p>Para usar nuestros Servicios y acceder a nuestro Contenido necesitará un ID de
    AGP. Un ID de AGP es la cuenta que usará en el ecosistema de AGP. Su ID de
    AGP es valioso y usted es responsable de mantener su confidencialidad y
    seguridad. AGP no es responsable de ninguna pérdida relacionada con el uso
    no autorizado de su ID de AGP. Póngase en contacto con AGP si sospecha que
    su ID de AGP ha sido comprometido.</p>
    <p>PRIVACIDAD</p>
    <p>Recopilación y uso de los datos de carácter personal
    Se considera información personal cualquier dato que pueda utilizarse para
    identificar a una persona en particular o ponerse en contacto con ella.
    Es posible que tengas que proporcionar datos de carácter personal cuando
    contactes con AGP. AGP podra compartir los datos de carácter personal y
    utilizarlos de acuerdo con la presente Política de Privacidad. Asimismo, pueden
    combinarlos con otros datos para suministrar y mejorar, servicios, contenidos y
    anuncios publicitarios.</p>
    <p>Qué datos de carácter personal se recopilan</p>
    Cuando creas un ID de AGP, descargas una actualización de software, te pones
    en contacto con AGP o participas en una encuesta online, se pueden recopilar
    diferentes datos, como tu nombre, dirección postal, número de teléfono,
    dirección de correo electrónico, preferencias de contacto o los datos de tu tarjeta
    de crédito.
    <p>Cómo se usa tu información personal</p>
    Los datos de carácter personal que se recopilan permiten mantenerte informado
    acerca de los servicios más recientes de AGP, las actualizaciones de software
    disponibles y los próximos eventos. Si no deseas formar parte de la lista de
    distribución, puedes darte de baja en cualquier momento actualizando tus
    preferencias.
    <p>Los datos de carácter personal también ayudan a crear, desarrollar, gestionar,
    entregar y mejorar los, servicios, contenidos y anuncios publicitarios, además de
    evitar pérdidas y fraudes.</p>
    <p>Es posible que se usen tus datos de carácter personal, incluida la fecha de
    nacimiento, para verificar la identidad, colaborar en la identificación de usuarios
    y determinar los servicios apropiados. Por ejemplo, se puede usar la fecha de
    nacimiento para determinar la edad de los titulares de cuentas de ID de AGP.
    Ocasionalmente es posible que se usen tus datos de carácter personal para
    enviarte notificaciones importantes. Como esta información es fundamental para
    tu interacción con AGP, no puedes optar por rechazar la recepción de estas
    comunicaciones.</p>
    <p>También se pueden utilizar tus datos de carácter personal para fines internos,
    incluyendo auditorías, análisis de datos e investigaciones, con el fin de mejorar
    los servicios y comunicaciones a de AGP.</p>
    <p>Recopilación y uso de los datos de carácter no personal</p>
    <p>También se recopilan datos de manera que no es posible asociarlos, por sí
    solos, directamente a una persona determinada. AGP puede recopilar, tratar,
    transferir y divulgar datos de carácter no personal con cualquier fin. Estos son
    algunos ejemplos de las categorías de datos de carácter no personal que puede
    recopilar AGP y los posibles usos que puede darle:</p>
    <p>Es posible que se recopilen datos tales como profesión, idioma, código postal,
    prefijo telefónico, identificador único de dispositivo, dirección URL de referencia,
    ubicación y zona horaria en la que se utiliza un servicio de AGP, para conocer
    mejor la conducta de los clientes y mejorar los servicios y anuncios publicitarios.
    Es posible que se recopile información acerca de las actividades de los clientes
    en el sitio web de los servicios de AGP. Estos datos se agregan y utilizan para
    proporcionar información más útil y para entender qué aspectos del sitio web y
    de los servicios generan mayor interés. Los datos agregados se consideran
    información no personal a efectos de esta Política de Privacidad.</p>
    <p>Es posible que se recopilen y almacenen detalles sobre cómo usas los servicios,
    incluidas las consultas de búsqueda. Esta información se puede utilizar para
    mejorar la relevancia de los resultados que proporcionan los servicios. Excepto
    en circunstancias muy concretas y con el único objeto de garantizar la calidad de
    los servicios en Internet, esta información no se asociará a tu dirección IP.
    Si se combinan datos de carácter no personal con datos de carácter personal,
    los datos combinados serán tratados como datos de carácter personal en tanto
    sigan estando combinados.</p>
    <p>Protección de los datos de carácter personal</p>
    <p>AGP se toma muy en serio la seguridad de tus datos de carácter personal. Los
    servicios online de AGP, protegen tus datos de carácter personal durante el
    tránsito mediante cifrado.</p>
    <p>Cuando AGP almacena tus datos personales, se utilizan sistemas informáticos
    con acceso limitado alojados en instalaciones con medidas de seguridad físicas.</p>
    <p>Integridad y conservación de los datos de carácter personal</p>
    <p>AGP te ofrece todo tipo de facilidades para garantizar que tus datos de carácter
    personal sean correctos, estén completos y se mantengan actualizados. Tus
    datos de carácter personal se conservan durante el periodo de tiempo necesario
    para cumplir los fines descritos en la presente Política de Privacidad, salvo que
    la ley exija o permita conservarlos durante un periodo de tiempo más largo.</p>
    <p>Acceso a los datos de carácter personal</p>
    <p>Puedes comprobar que tu información de contacto y tus preferencias sean
    correctas, estén completas y se mantengan actualizadas en todo momento. En
    lo que respecta a los demás datos de carácter personal que se conservan, se
    facilita el acceso a ellos con cualquier propósito, incluyendo solicitudes de
    rectificación, en caso de que sean incorrectos, o de eliminación, en caso de que
    AGP no esté obligado a conservarlos, por imperativo legal o por razones
    legítimas de negocio. AGP se reserva el derecho a no tramitar aquellas
    solicitudes que sean improcedentes o vejatorias, que pongan en riesgo la
    privacidad de terceros, que resulten inviables o para las que la legislación local
    no exija derecho de acceso. Las solicitudes de acceso, rectificación o
    eliminación pueden realizarse mediante el formulario de contacto acerca de la
    privacidad.</p>
    <p>El compromiso de toda la empresa con tu privacidad</p>
    <p>Para garantizar la seguridad de tus datos de carácter personal, se comunican las
    directrices en materia de privacidad y seguridad a todos los empleados de AGP
    y se adoptan las medidas correspondientes para proteger la privacidad dentro de
    la compañía.</p>
    <p>PROPIEDAD INTELECTUAL</p>
    <p>Usted acepta que los Servicios, incluyendo pero sin quedar limitados a,
    Contenidos, gráficos, interfaz de usuario, clips de audio, clips de vídeo,
    contenido editorial y los scripts y software usados para implementar los
    Servicios, contienen información y material propiedad de AGP y/o sus
    licenciatarios, y que están protegidos por leyes de propiedad intelectual
    aplicables u otras, incluyendo pero sin quedar limitados a copyright. Usted
    acepta que no usará dicha información y material de propiedad de cualquier
    forma, excepto para uso personal y no comercial de los servicios de acuerdo con
    este Acuerdo. Ninguna parte de los Servicios podrá reproducirse de cualquier
    manera o por cualquier medio, excepto cuando esté permitido expresamente por
    este Acuerdo. Usted acepta no modificar, alquilar, prestar, vender o distribuir los
    Servicios o Contenidos de cualquier forma, y no podrá sacar partido de los
    Servicios de cualquier forma no expresamente autorizada.</p>
    <p>CAMBIOS EN EL CONTRATO</p>
    <p>AGP se reserva el derecho en cualquier momento de modificar este Acuerdo y
    añadir términos o condiciones nuevas o adicionales sobre su uso de los
    Servicios. Estas modificaciones y los términos y condiciones adicionales serán
    efectivos inmediatamente y se incorporan en este Acuerdo. Su uso continuado
    de los Servicios se entenderá como aceptación de los mismos.</p>
    <p>MANTENIMIENTO Y SOPORTE DE AGP</p>
    <p>AGP es responsable de proporcionar mantenimiento y soporte solo para
    Aplicaciones de Agp, o según la ley lo requiera. Los Proveedores de
    Aplicaciones serán responsables de proporcionar mantenimiento y soporte para
    Aplicaciones de terceros.</p>
    <br><br><br><br><br>
</body>
</html>

    
`;
