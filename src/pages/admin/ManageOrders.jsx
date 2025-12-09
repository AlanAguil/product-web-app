import AdminNavbar from '../../components/layout/AdminNavbar';
import '../../styles/orderManagementStyle.css';

const requestOrders = [
  { title: 'Solicitud de Pedido', eta: '2 min', status: 'En espera' },
  { title: 'Solicitud de Pedido', eta: '15 min', status: 'Aprobado', viewable: true },
  { title: 'Solicitud de Pedido', eta: '10 min', status: 'Rechazado', disabled: true },
];

const inProgressOrders = [
  { title: 'Pedido pagado', description: 'Descripción del pedido', eta: '15 min', status: 'En espera' },
  { title: 'Pedido enviado', description: 'Descripción del pedido', eta: '15 min', status: 'Enviado' },
  { title: 'Pedido entregado', description: 'Descripción del pedido', eta: '10 min', status: 'Entregado' },
];

const historyOrders = [
  { title: 'Pedido entregado', description: 'Descripción del pedido', eta: '15 min', status: 'Entregado' },
  { title: 'Pedido entregado', description: 'Descripción del pedido', eta: '15 min', status: 'Entregado' },
  { title: 'Pedido entregado', description: 'Descripción del pedido', eta: '15 min', status: 'Entregado' },
];

const ManageOrders = () => {
  return (
    <div>
      <AdminNavbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center flex-grow-1">Gestionar Pedidos</h2>
          <div className="input-group" style={{ maxWidth: 300 }}>
            <input type="text" className="form-control" placeholder="Buscar usuario" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <img src="/img/search.png" alt="Buscar" style={{ height: 20 }} />
              </button>
            </div>
          </div>
        </div>

        <section className="mb-4">
          <h4>Solicitud de pedidos</h4>
          <div className="list-group">
            {requestOrders.map((order, index) => (
              <div
                key={`request-${index}`}
                className="list-group-item d-flex justify-content-between align-items-center shadow-inner order-card"
              >
                <div>
                  <p>
                    <strong>Pedido:</strong> {order.title}
                  </p>
                  <p>
                    <strong>Tiempo estimado:</strong> {order.eta}
                  </p>
                  <p>
                    <strong>Estatus del producto:</strong> {order.status}
                  </p>
                </div>
                <div>
                  {order.viewable ? (
                    <button className="btn btn-outline-primary">Ver Pedido</button>
                  ) : order.disabled ? (
                    <button className="btn btn-outline-primary btn-sm" disabled>
                      Solicite otro Pedido en otro momento
                    </button>
                  ) : (
                    <>
                      <button className="btn btn-success btn-sm mr-2">Aceptar</button>
                      <button className="btn btn-danger btn-sm">Rechazar</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h4>Pedidos en curso</h4>
          <div className="list-group">
            {inProgressOrders.map((order, index) => (
              <div
                key={`progress-${index}`}
                className="list-group-item d-flex justify-content-between align-items-center shadow-inner order-card"
              >
                <div>
                  <p>
                    <strong>Pedido:</strong> {order.title}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {order.description}
                  </p>
                  <p>
                    <strong>Tiempo estimado:</strong> {order.eta}
                  </p>
                  <p>
                    <strong>Estatus del producto:</strong> {order.status}
                  </p>
                </div>
                <div>
                  <button className="btn btn-accept mr-2">Actualizar estatus</button>
                  <button className="btn btn-outline-primary">Ver Pedido</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <h4>Historial de pedidos</h4>
          <div className="list-group">
            {historyOrders.map((order, index) => (
              <div
                key={`history-${index}`}
                className="list-group-item d-flex justify-content-between align-items-center shadow-inner order-card"
              >
                <div>
                  <p>
                    <strong>Pedido:</strong> {order.title}
                  </p>
                  <p>
                    <strong>Descripción:</strong> {order.description}
                  </p>
                  <p>
                    <strong>Tiempo estimado:</strong> {order.eta}
                  </p>
                  <p>
                    <strong>Estatus del producto:</strong> {order.status}
                  </p>
                </div>
                <div>
                  <button className="btn btn-outline-primary">Ver Pedido</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageOrders;

